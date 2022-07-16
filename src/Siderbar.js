import UserSidebar from './UserSidebar';
import Sugestions from './Sugestions';
import Footer from './Footer';

export default function Sidebar() {
    return (
        <div class="sidebar">
            <UserSidebar />
            <Sugestions />
            <Footer />
        </div>
    )
}