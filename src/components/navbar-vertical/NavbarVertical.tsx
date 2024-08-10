
const NavbarVertical = () => {
    return (
        <nav
            className="navbar navbar-vertical navbar-expand-lg"
            style={{ display: "Box" }}
        >
            <div className="collapse navbar-collapse" id="navbarVerticalCollapse">
                {/* scrollbar removed*/}
                <div className="navbar-vertical-content">
                    <ul className="navbar-nav flex-column" id="navbarVerticalNav">
                        <li className="nav-item">
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-home"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-home"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="pie-chart" />
                                        </span>
                                        <span className="nav-link-text">Home</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-home"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Home</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../index.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">E commerce</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../dashboard/project-management.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project management</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../dashboard/crm.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">CRM</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../dashboard/travel-agency.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Travel agency</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../social/feed.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Social feed</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Apps</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-e-commerce"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="true"
                                    aria-controls="nv-e-commerce"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="shopping-cart" />
                                        </span>
                                        <span className="nav-link-text">E commerce</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent show"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-e-commerce"
                                    >
                                        <li className="collapsed-nav-item-title d-none">E commerce</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-admin"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="nv-admin"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Admin</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent show"
                                                    data-bs-parent="#e-commerce"
                                                    id="nv-admin"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link active"
                                                            href="add-product.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Add product</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="products.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Products</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="customers.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Customers</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="customer-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Customer details
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="orders.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Orders</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="order-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Order details</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="refund.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Refund</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-customer"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                aria-controls="nv-customer"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Customer</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent show"
                                                    data-bs-parent="#e-commerce"
                                                    id="nv-customer"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/homepage.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Homepage</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/product-details.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Product details
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/products-filter.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Products filter
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/cart.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Cart</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/checkout.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Checkout</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/shipping-info.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Shipping info</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/profile.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Profile</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/favourite-stores.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Favourite stores
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/wishlist.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Wishlist</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/order-tracking.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Order tracking
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../landing/invoice.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Invoice</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-CRM"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-CRM"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="phone" />
                                        </span>
                                        <span className="nav-link-text">CRM</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-CRM"
                                    >
                                        <li className="collapsed-nav-item-title d-none">CRM</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/analytics.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Analytics</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/deals.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Deals</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/deal-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Deal details</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/leads.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Leads</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/lead-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Lead details</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/reports.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Reports</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/reports-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Reports details</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../crm/add-contact.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Add contact</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-project-management"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-project-management"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="clipboard" />
                                        </span>
                                        <span className="nav-link-text">Project management</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-project-management"
                                    >
                                        <li className="collapsed-nav-item-title d-none">
                                            Project management
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/create-new.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create new</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/project-list-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project list view</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/project-card-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project card view</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/project-board-view.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project board view</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/todo-list.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Todo list</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../project-management/project-details.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Project details</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-travel-agency"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-travel-agency"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="briefcase" />
                                        </span>
                                        <span className="nav-link-text">Travel agency</span>
                                        <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">
                                            New
                                        </span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-travel-agency"
                                    >
                                        <li className="collapsed-nav-item-title d-none">
                                            Travel agency
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../travel-agency/landing.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Landing</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-hotel"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-hotel"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Hotel</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#travel-agency"
                                                    id="nv-hotel"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link dropdown-indicator"
                                                            href="#nv-hotel-admin"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="nv-hotel-admin"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon">
                                                                    <span className="fas fa-caret-right" />
                                                                </div>
                                                                <span className="nav-link-text">Admin</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                        <div className="parent-wrapper">
                                                            <ul
                                                                className="nav collapse parent"
                                                                data-bs-parent="#hotel"
                                                                id="nv-hotel-admin"
                                                            >
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link"
                                                                        href="../../travel-agency/hotel/admin/add-property.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Add property
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Add room
                                                                            </span>
                                                                            <span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">
                                                                                Next
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link"
                                                                        href="../../travel-agency/hotel/admin/room-listing.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Room listing
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Search room
                                                                            </span>
                                                                            <span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">
                                                                                Next
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link dropdown-indicator"
                                                            href="#nv-hotel-customer"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="nv-hotel-customer"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon">
                                                                    <span className="fas fa-caret-right" />
                                                                </div>
                                                                <span className="nav-link-text">Customer</span>
                                                                <span className="badge ms-2 badge badge-phoenix badge-phoenix-primary ">
                                                                    Next
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                        <div className="parent-wrapper">
                                                            <ul
                                                                className="nav collapse parent"
                                                                data-bs-parent="#hotel"
                                                                id="nv-hotel-customer"
                                                            >
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Homepage
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Hotel details
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Hotel compare
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link nav-link-disable"
                                                                        href="../../../coming-soon.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">
                                                                                Check out
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link nav-link-disable"
                                                href="../../../upcoming.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Flight</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        Upcoming
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link nav-link-disable"
                                                href="../../../upcoming.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Trip</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        Upcoming
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../chat.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="message-square" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Chat</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-email"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-email"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="mail" />
                                        </span>
                                        <span className="nav-link-text">Email</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-email"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Email</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../email/inbox.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Inbox</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../email/email-detail.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Email detail</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../email/compose.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Compose</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-events"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-events"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="bookmark" />
                                        </span>
                                        <span className="nav-link-text">Events</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-events"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Events</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../events/create-an-event.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create an event</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../events/event-detail.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Event detail</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-kanban"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-kanban"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="trello" />
                                        </span>
                                        <span className="nav-link-text">Kanban</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-kanban"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Kanban</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../kanban/kanban.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Kanban</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../kanban/boards.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Boards</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../kanban/create-kanban-board.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Create board</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-social"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-social"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="share-2" />
                                        </span>
                                        <span className="nav-link-text">Social</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-social"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Social</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../social/profile.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Profile</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../social/settings.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Settings</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../calendar.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="calendar" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Calendar</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Pages</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../pages/starter.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="compass" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Starter</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-faq"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-faq"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="help-circle" />
                                        </span>
                                        <span className="nav-link-text">Faq</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-faq"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Faq</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/faq/faq-accordion.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Faq accordion</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/faq/faq-tab.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Faq tab</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-landing"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-landing"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="globe" />
                                        </span>
                                        <span className="nav-link-text">Landing</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-landing"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Landing</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/landing/default.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Default</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/landing/alternate.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Alternate</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-pricing"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-pricing"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="tag" />
                                        </span>
                                        <span className="nav-link-text">Pricing</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-pricing"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Pricing</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/pricing/pricing-column.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Pricing column</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/pricing/pricing-grid.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Pricing grid</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../pages/notifications.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="bell" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Notifications</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../pages/members.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="users" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Members</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../pages/timeline.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="clock" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Timeline</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-errors"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-errors"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="alert-triangle" />
                                        </span>
                                        <span className="nav-link-text">Errors</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-errors"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Errors</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/errors/404.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">404</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/errors/403.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">403</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../pages/errors/500.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">500</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-authentication"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-authentication"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="lock" />
                                        </span>
                                        <span className="nav-link-text">Authentication</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-authentication"
                                    >
                                        <li className="collapsed-nav-item-title d-none">
                                            Authentication
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-simple"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-simple"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Simple</span>
                                                    <span
                                                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                                        style={{ fontSize: 6 }}
                                                    />
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#authentication"
                                                    id="nv-simple"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/sign-in.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign in</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/sign-up.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign up</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/sign-out.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign out</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/forgot-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Forgot password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/reset-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Reset password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/lock-screen.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Lock screen</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/simple/2FA.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">2FA</span>
                                                                <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                                    New
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-split"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-split"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Split</span>
                                                    <span
                                                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                                        style={{ fontSize: 6 }}
                                                    />
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#authentication"
                                                    id="nv-split"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/sign-in.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign in</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/sign-up.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign up</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/sign-out.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign out</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/forgot-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Forgot password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/reset-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Reset password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/lock-screen.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Lock screen</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/split/2FA.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">2FA</span>
                                                                <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                                    New
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-Card"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-Card"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Card</span>
                                                    <span
                                                        className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                                        style={{ fontSize: 6 }}
                                                    />
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#authentication"
                                                    id="nv-Card"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/sign-in.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign in</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/sign-up.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign up</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/sign-out.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Sign out</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/forgot-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Forgot password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/reset-password.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Reset password
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/lock-screen.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Lock screen</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../pages/authentication/card/2FA.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">2FA</span>
                                                                <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                                    New
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-layouts"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-layouts"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="layout" />
                                        </span>
                                        <span className="nav-link-text">Layouts</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-layouts"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Layouts</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/vertical-sidenav.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Vertical sidenav</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/dark-mode.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Dark mode</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/sidenav-collapse.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Sidenav collapse</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/darknav.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Darknav</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/topnav-slim.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Topnav slim</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/navbar-top-slim.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Navbar top slim</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/navbar-top.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Navbar top</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/horizontal-slim.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Horizontal slim</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/combo-nav.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Combo nav</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/combo-nav-slim.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Combo nav slim</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../demo/dual-nav.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Dual nav</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Modules</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-forms"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-forms"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="file-text" />
                                        </span>
                                        <span className="nav-link-text">Forms</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-forms"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Forms</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-basic"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-basic"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Basic</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#forms"
                                                    id="nv-basic"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/form-control.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Form control</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/input-group.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Input group</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/select.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Select</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/checks.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Checks</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/range.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Range</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/floating-labels.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Floating labels
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/basic/layout.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Layout</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-advance"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-advance"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Advance</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#forms"
                                                    id="nv-advance"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/advance-select.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">
                                                                    Advance select
                                                                </span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/date-picker.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Date picker</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/editor.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Editor</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/file-uploader.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">File uploader</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/rating.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Rating</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/forms/advance/emoji-button.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Emoji button</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/forms/validation.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Validation</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/forms/wizard.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Wizard</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-icons"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-icons"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="grid" />
                                        </span>
                                        <span className="nav-link-text">Icons</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-icons"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Icons</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/icons/feather.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Feather</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/icons/font-awesome.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Font awesome</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/icons/unicons.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Unicons</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-tables"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-tables"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="columns" />
                                        </span>
                                        <span className="nav-link-text">Tables</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-tables"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Tables</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/tables/basic-tables.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Basic tables</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/tables/advance-tables.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Advance tables</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/tables/bulk-select.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Bulk Select</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-ECharts"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-ECharts"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="bar-chart-2" />
                                        </span>
                                        <span className="nav-link-text">ECharts</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-ECharts"
                                    >
                                        <li className="collapsed-nav-item-title d-none">ECharts</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/line-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Line charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/bar-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Bar charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/candlestick-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Candlestick charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/geo-map.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Geo map</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/scatter-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Scatter charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/pie-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Pie charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/gauge-chart.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Gauge chart</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/radar-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Radar charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/heatmap-charts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Heatmap charts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/echarts/how-to-use.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">How to use</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-components"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-components"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="package" />
                                        </span>
                                        <span className="nav-link-text">Components</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-components"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Components</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/accordion.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Accordion</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/avatar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Avatar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/alerts.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Alerts</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/badge.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Badge</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/breadcrumb.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Breadcrumb</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/button.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Buttons</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/calendar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Calendar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/card.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Card</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-carousel"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-carousel"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Carousel</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#components"
                                                    id="nv-carousel"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/components/carousel/bootstrap.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Bootstrap</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/components/carousel/swiper.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Swiper</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/collapse.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Collapse</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/dropdown.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Dropdown</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/list-group.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">List group</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/modal.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Modals</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-navs-_and_-Tabs"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-navs-_and_-Tabs"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Navs &amp; Tabs</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#components"
                                                    id="nv-navs-_and_-Tabs"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/components/navs-and-tabs/navs.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Navs</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/components/navs-and-tabs/navbar.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Navbar</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../modules/components/navs-and-tabs/tabs.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Tabs</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/offcanvas.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Offcanvas</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/progress-bar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Progress bar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/placeholder.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Placeholder</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/pagination.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Pagination</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/popovers.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Popovers</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/scrollspy.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Scrollspy</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/sortable.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Sortable</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/spinners.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Spinners</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/toast.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Toast</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/tooltips.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Tooltips</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/components/chat-widget.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Chat widget</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-utilities"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-utilities"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="tool" />
                                        </span>
                                        <span className="nav-link-text">Utilities</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-utilities"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Utilities</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/background.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Background</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/borders.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Borders</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/colors.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Colors</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/display.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Display</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/flex.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Flex</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/stacks.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Stacks</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/float.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Float</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/grid.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Grid</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/interactions.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Interactions</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/opacity.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Opacity</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/overflow.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Overflow</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/position.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Position</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/shadows.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Shadows</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/sizing.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Sizing</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/spacing.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Spacing</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/typography.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Typography</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/vertical-align.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Vertical align</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../modules/utilities/visibility.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Visibility</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../widgets.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="server" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Widgets</span>
                                        </span>
                                        <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning nav-link-badge">
                                            New
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-multi-level"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-multi-level"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="layers" />
                                        </span>
                                        <span className="nav-link-text">Multi level</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-multi-level"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Multi level</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-level-two"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-level-two"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Level two</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#multi-level"
                                                    id="nv-level-two"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../index-2.html#!.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Item 1</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../index-2.html#!.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Item 2</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-level-three"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-level-three"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Level three</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#multi-level"
                                                    id="nv-level-three"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../index-2.html#!.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Item 3</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link dropdown-indicator"
                                                            href="#nv-item-4"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="nv-item-4"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon">
                                                                    <span className="fas fa-caret-right" />
                                                                </div>
                                                                <span className="nav-link-text">Item 4</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                        <div className="parent-wrapper">
                                                            <ul
                                                                className="nav collapse parent"
                                                                data-bs-parent="#level-three"
                                                                id="nv-item-4"
                                                            >
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link"
                                                                        href="../../../index-2.html#!.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">Item 5</span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link"
                                                                        href="../../../index-2.html#!.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">Item 6</span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link dropdown-indicator"
                                                href="#nv-level-four"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                aria-controls="nv-level-four"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="dropdown-indicator-icon">
                                                        <span className="fas fa-caret-right" />
                                                    </div>
                                                    <span className="nav-link-text">Level four</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                            <div className="parent-wrapper">
                                                <ul
                                                    className="nav collapse parent"
                                                    data-bs-parent="#multi-level"
                                                    id="nv-level-four"
                                                >
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            href="../../../index-2.html#!.html"
                                                            data-bs-toggle=""
                                                            aria-expanded="false"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <span className="nav-link-text">Item 6</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link dropdown-indicator"
                                                            href="#nv-item-7"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded="false"
                                                            aria-controls="nv-item-7"
                                                        >
                                                            <div className="d-flex align-items-center">
                                                                <div className="dropdown-indicator-icon">
                                                                    <span className="fas fa-caret-right" />
                                                                </div>
                                                                <span className="nav-link-text">Item 7</span>
                                                            </div>
                                                        </a>
                                                        {/* more inner pages*/}
                                                        <div className="parent-wrapper">
                                                            <ul
                                                                className="nav collapse parent"
                                                                data-bs-parent="#level-four"
                                                                id="nv-item-7"
                                                            >
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link"
                                                                        href="../../../index-2.html#!.html"
                                                                        data-bs-toggle=""
                                                                        aria-expanded="false"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <span className="nav-link-text">Item 8</span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                </li>
                                                                <li className="nav-item">
                                                                    <a
                                                                        className="nav-link dropdown-indicator"
                                                                        href="#nv-item-9"
                                                                        data-bs-toggle="collapse"
                                                                        aria-expanded="false"
                                                                        aria-controls="nv-item-9"
                                                                    >
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="dropdown-indicator-icon">
                                                                                <span className="fas fa-caret-right" />
                                                                            </div>
                                                                            <span className="nav-link-text">Item 9</span>
                                                                        </div>
                                                                    </a>
                                                                    {/* more inner pages*/}
                                                                    <div className="parent-wrapper">
                                                                        <ul
                                                                            className="nav collapse parent"
                                                                            data-bs-parent="#item-7"
                                                                            id="nv-item-9"
                                                                        >
                                                                            <li className="nav-item">
                                                                                <a
                                                                                    className="nav-link"
                                                                                    href="../../../index-2.html#!.html"
                                                                                    data-bs-toggle=""
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <div className="d-flex align-items-center">
                                                                                        <span className="nav-link-text">
                                                                                            Item 10
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                                {/* more inner pages*/}
                                                                            </li>
                                                                            <li className="nav-item">
                                                                                <a
                                                                                    className="nav-link"
                                                                                    href="../../../index-2.html#!.html"
                                                                                    data-bs-toggle=""
                                                                                    aria-expanded="false"
                                                                                >
                                                                                    <div className="d-flex align-items-center">
                                                                                        <span className="nav-link-text">
                                                                                            Item 11
                                                                                        </span>
                                                                                    </div>
                                                                                </a>
                                                                                {/* more inner pages*/}
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            {/* label*/}
                            <p className="navbar-vertical-label">Documentation</p>
                            <hr className="navbar-vertical-line" />
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../documentation/getting-started.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="life-buoy" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Getting started</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-customization"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-customization"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="settings" />
                                        </span>
                                        <span className="nav-link-text">Customization</span>
                                        <span
                                            className="fa-solid fa-circle text-info ms-1 new-page-indicator"
                                            style={{ fontSize: 6 }}
                                        />
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-customization"
                                    >
                                        <li className="collapsed-nav-item-title d-none">
                                            Customization
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/customization/configuration.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Configuration</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/customization/styling.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Styling</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/customization/color.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Color</span>
                                                    <span className="badge ms-2 badge badge-phoenix badge-phoenix-warning ">
                                                        New
                                                    </span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/customization/dark-mode.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Dark mode</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/customization/plugin.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Plugin</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link dropdown-indicator label-1"
                                    href="#nv-layouts-doc"
                                    role="button"
                                    data-bs-toggle="collapse"
                                    aria-expanded="false"
                                    aria-controls="nv-layouts-doc"
                                >
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown-indicator-icon">
                                            <span className="fas fa-caret-right" />
                                        </div>
                                        <span className="nav-link-icon">
                                            <span data-feather="table" />
                                        </span>
                                        <span className="nav-link-text">Layouts doc</span>
                                    </div>
                                </a>
                                <div className="parent-wrapper label-1">
                                    <ul
                                        className="nav collapse parent"
                                        data-bs-parent="#navbarVerticalCollapse"
                                        id="nv-layouts-doc"
                                    >
                                        <li className="collapsed-nav-item-title d-none">Layouts doc</li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/layouts/vertical-navbar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Vertical navbar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/layouts/horizontal-navbar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Horizontal navbar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/layouts/combo-navbar.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Combo navbar</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                href="../../../documentation/layouts/dual-nav.html"
                                                data-bs-toggle=""
                                                aria-expanded="false"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="nav-link-text">Dual nav</span>
                                                </div>
                                            </a>
                                            {/* more inner pages*/}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../documentation/gulp.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span className="fa-brands fa-gulp ms-1 me-1 fa-lg" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Gulp</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../documentation/design-file.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="figma" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Design file</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../changelog.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="git-merge" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Changelog</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                            {/* parent pages*/}
                            <div className="nav-item-wrapper">
                                <a
                                    className="nav-link label-1"
                                    href="../../../showcase.html"
                                    role="button"
                                    data-bs-toggle=""
                                    aria-expanded="false"
                                >
                                    <div className="d-flex align-items-center">
                                        <span className="nav-link-icon">
                                            <span data-feather="monitor" />
                                        </span>
                                        <span className="nav-link-text-wrapper">
                                            <span className="nav-link-text">Showcase</span>
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-vertical-footer">
                <button className="btn navbar-vertical-toggle border-0 fw-semibold w-100 white-space-nowrap d-flex align-items-center">
                    <span className="uil uil-left-arrow-to-left fs-8" />
                    <span className="uil uil-arrow-from-right fs-8" />
                    <span className="navbar-vertical-footer-text ms-2">Collapsed View</span>
                </button>
            </div>
        </nav>

    )
}

export default NavbarVertical
