import adminRoutes from "../routes/adminRoutes";
import sellerRoutes from "./sellerRoute";

const privateRoutes = [...adminRoutes, ...sellerRoutes];

export default privateRoutes;
