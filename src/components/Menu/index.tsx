import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { products } from "../../mocks/products";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../ProductModal";
import { Text } from "../Text";

import {
  ProductContainer,
  ProductImage,
  ProductDetails,
  Separator,
  AddToCardButton,
} from "./styles";

export function Menu() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }
  return (
    <>
      <ProductModal
        product={selectedProduct}
        onClose={() => setIsModalVisible(false)}
        visible={isModalVisible}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={(product) => product._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: product }) => (
          <ProductContainer onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://10.0.0.121:3001/uploads/${product.imagePath}`,
              }}
            />
            <ProductDetails>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='600'>
                {formatCurrency(product.price)}
              </Text>
              <AddToCardButton>
                <PlusCircle />
              </AddToCardButton>
            </ProductDetails>
          </ProductContainer>
        )}
      ></FlatList>
    </>
  );
}
