import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { formatCurrency } from "../../utils/formatCurrency";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { Text } from "../Text";
import {
  Actions,
  Image,
  Item,
  ProductDetails,
  ProductContainer,
  QuantityContainer,
} from "./styles";

interface CartProps {
  cartItems: CartItem[]
}

function Cart({ cartItems }: CartProps) {
  return (
    <FlatList
      data={cartItems}
      keyExtractor={(cartItem) => cartItem.product._id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item: cartItem }) => (
        <Item>
          <ProductContainer>
            <Image
              source={{
                uri: `http://10.0.0.121:3001/uploads/${cartItem.product.imagePath}`,
              }}
            />

            <QuantityContainer>
              <Text color='#666' size={14}>
                {cartItem.quantity}x
              </Text>
            </QuantityContainer>

            <ProductDetails>
              <Text size={14} weight='600'>
                {cartItem.product.name}
              </Text>
              <Text color='#666' size={14} style={{ marginTop: 4 }}>
                {formatCurrency(cartItem.product.price)}
              </Text>
            </ProductDetails>
          </ProductContainer>

          <Actions>
            <TouchableOpacity style={{ marginRight: 24 }}>
              <PlusCircle />
            </TouchableOpacity>

            <TouchableOpacity>
              <MinusCircle />
            </TouchableOpacity>
          </Actions>
        </Item>
      )}
    />
  );
}

export { Cart };
