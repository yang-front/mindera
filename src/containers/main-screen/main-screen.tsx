import { OrdersCard } from '../../components/orders-card';
import { DisclaimerText, MainScreenContainer } from './main-screen.styles';

export default function MainScreen() {
    return (
        <MainScreenContainer>
            <DisclaimerText>You can add new products, orders or a random  number of each product. The table will remain ordered by ascending product id. To change the property that orders the table just change the property parameter on the dynamic search function execution </DisclaimerText>
            <OrdersCard/>
        </MainScreenContainer>
    );
}
