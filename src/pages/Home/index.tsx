import { DeliveryForm } from "./components/DeliveryForm";
import { PaymentForm } from "./components/PaymentForm";
import { HomeContainer } from "./style";

export function Home() {
    return(
        <HomeContainer>
            <form action="">
                <DeliveryForm />
                <PaymentForm />
                <button type="submit">Confirmar pedido</button>
            </form>

        </HomeContainer>
    )
}