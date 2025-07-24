import Checkout from '../components/checkout/Checkout';
import ContentLayout from '../components/layout/ContentLayout';
import style from './pages.module.css';


export default function CheckoutPage() {
  
    return (
        <main style={{  paddingTop: "32px", paddingBottom: "32px" }}>
            <ContentLayout>
                <Checkout></Checkout>
            </ContentLayout>
        </main>
    );
}
