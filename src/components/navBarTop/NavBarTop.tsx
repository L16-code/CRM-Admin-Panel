
const NavBarTop = () => {
    return (
        <nav
            className="navbar navbar-top fixed-top navbar-expand-lg"
            id="navbarTop"
            style={{ display: "none" }}
        >
            <div className="navbar-logo">
                <button
                    className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTopCollapse"
                    aria-controls="navbarTopCollapse"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggle-icon">
                        <span className="toggle-line" />
                    </span>
                </button>
                <a className="navbar-brand me-1 me-sm-3" href="../../../index.html">
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center">
                            <img
                                src="../../../assets/img/icons/logo.png"
                                alt="phoenix"
                                width={27}
                            />
                            <p className="logo-text ms-2 d-none d-sm-block">phoenix</p>
                        </div>
                    </div>
                </a>
            </div>
            <div
                className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center"
                id="navbarTopCollapse"
            >
                <ul
                    className="navbar-nav navbar-nav-top"
                    data-dropdown-on-hover="data-dropdown-on-hover"
                >
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle lh-1"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="uil fs-8 me-2 uil-chart-pie" />
                            Home
                        </a>
                        <ul className="dropdown-menu navbar-dropdown-caret">
                            <li>
                                <a className="dropdown-item" href="../../../index.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="shopping-cart" />E
                                        commerce
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../dashboard/project-management.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="clipboard" />
                                        Project management
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../../dashboard/crm.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="phone" />
                                        CRM
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../dashboard/travel-agency.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="briefcase" />
                                        Travel agency
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../social/feed.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="share-2" />
                                        Social feed
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle lh-1"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="uil fs-8 me-2 uil-cube" />
                            Apps
                        </a>
                        <ul className="dropdown-menu navbar-dropdown-caret">
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="e-commerce"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="shopping-cart" />E
                                            commerce
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="admin"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Admin
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="dropdown-item active" href="add-product.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Add product
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="products.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Products
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="customers.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Customers
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="customer-details.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Customer details
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="orders.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Orders
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="order-details.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Order details
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="refund.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Refund
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="customer"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Customer
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/homepage.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Homepage
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/product-details.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Product details
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/products-filter.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Products filter
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="../landing/cart.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Cart
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/checkout.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Checkout
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/shipping-info.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Shipping info
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="../landing/profile.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Profile
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/favourite-stores.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Favourite stores
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/wishlist.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Wishlist
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../landing/order-tracking.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Order tracking
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="../landing/invoice.html">
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Invoice
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="CRM"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="phone" />
                                            CRM
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="../../crm/analytics.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Analytics
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/deals.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Deals
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/deal-details.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Deal details
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/leads.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Leads
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/lead-details.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Lead details
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/reports.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Reports
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../crm/reports-details.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Reports details
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../crm/add-contact.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Add contact
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="project-management"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="clipboard" />
                                            Project management
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/create-new.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Create new
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/project-list-view.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Project list view
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/project-card-view.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Project card view
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/project-board-view.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Project board view
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/todo-list.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Todo list
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../project-management/project-details.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Project details
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="travel-agency"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="briefcase" />
                                            Travel agency
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../travel-agency/landing.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Landing
                                            </div>
                                        </a>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="hotel"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Hotel
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="dropdown">
                                                <a
                                                    className="dropdown-item dropdown-toggle"
                                                    id="admin"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                        <span>
                                                            <span className="me-2 uil" />
                                                            Admin
                                                        </span>
                                                    </div>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="../../travel-agency/hotel/admin/add-property.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Add property
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Add room
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="../../travel-agency/hotel/admin/room-listing.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Room listing
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Search room
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="dropdown">
                                                <a
                                                    className="dropdown-item dropdown-toggle"
                                                    id="customer"
                                                    href="#"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                        <span>
                                                            <span className="me-2 uil" />
                                                            Customer
                                                        </span>
                                                    </div>
                                                </a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Homepage
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Hotel details
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Hotel compare
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item nav-link-disable"
                                                            href="../../../coming-soon.html"
                                                        >
                                                            <div className="dropdown-item-wrapper">
                                                                <span className="me-2 uil" />
                                                                Check out
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item nav-link-disable"
                                            href="../../../upcoming.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Flight
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item nav-link-disable"
                                            href="../../../upcoming.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Trip
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../chat.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="message-square" />
                                        Chat
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="email"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="mail" />
                                            Email
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="../../email/inbox.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Inbox
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../email/email-detail.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Email detail
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../email/compose.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Compose
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="events"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="bookmark" />
                                            Events
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../events/create-an-event.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Create an event
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../events/event-detail.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Event detail
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="kanban"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="trello" />
                                            Kanban
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="../../kanban/kanban.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Kanban
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../kanban/boards.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Boards
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../kanban/create-kanban-board.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Create board
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="social"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="share-2" />
                                            Social
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="../../social/profile.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Profile
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../social/settings.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Settings
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../calendar.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="calendar" />
                                        Calendar
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle lh-1"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="uil fs-8 me-2 uil-files-landscapes-alt" />
                            Pages
                        </a>
                        <ul className="dropdown-menu navbar-dropdown-caret">
                            <li>
                                <a className="dropdown-item" href="../../../pages/starter.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="compass" />
                                        Starter
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="faq"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="help-circle" />
                                            Faq
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/faq/faq-accordion.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Faq accordion
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/faq/faq-tab.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Faq tab
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="landing"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="globe" />
                                            Landing
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/landing/default.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Default
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/landing/alternate.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Alternate
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="pricing"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="tag" />
                                            Pricing
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/pricing/pricing-column.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Pricing column
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/pricing/pricing-grid.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Pricing grid
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../pages/notifications.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="bell" />
                                        Notifications
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../../pages/members.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="users" />
                                        Members
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../../pages/timeline.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="clock" />
                                        Timeline
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="errors"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="alert-triangle" />
                                            Errors
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/errors/404.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                404
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/errors/403.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                403
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../pages/errors/500.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                500
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="authentication"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="lock" />
                                            Authentication
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="simple"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Simple
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/sign-in.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign in
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/sign-up.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign up
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/sign-out.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign out
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/forgot-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Forgot password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/reset-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Reset password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/lock-screen.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Lock screen
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/simple/2FA.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        2FA
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="split"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Split
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/sign-in.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign in
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/sign-up.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign up
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/sign-out.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign out
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/forgot-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Forgot password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/reset-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Reset password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/lock-screen.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Lock screen
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/split/2FA.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        2FA
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a
                                            className="dropdown-item dropdown-toggle"
                                            id="Card"
                                            href="#"
                                            data-bs-toggle="dropdown"
                                            data-bs-auto-close="outside"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                                <span>
                                                    <span className="me-2 uil" />
                                                    Card
                                                </span>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/sign-in.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign in
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/sign-up.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign up
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/sign-out.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Sign out
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/forgot-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Forgot password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/reset-password.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Reset password
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/lock-screen.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        Lock screen
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="dropdown-item"
                                                    href="../../../pages/authentication/card/2FA.html"
                                                >
                                                    <div className="dropdown-item-wrapper">
                                                        <span className="me-2 uil" />
                                                        2FA
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="layouts"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="layout" />
                                            Layouts
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/vertical-sidenav.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Vertical sidenav
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/dark-mode.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Dark mode
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/sidenav-collapse.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Sidenav collapse
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../../demo/darknav.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Darknav
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/topnav-slim.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Topnav slim
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/navbar-top-slim.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Navbar top slim
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/navbar-top.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Navbar top
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/horizontal-slim.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Horizontal slim
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/combo-nav.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Combo nav
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../demo/combo-nav-slim.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Combo nav slim
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="../../../demo/dual-nav.html">
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Dual nav
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle lh-1"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="uil fs-8 me-2 uil-puzzle-piece" />
                            Modules
                        </a>
                        <ul className="dropdown-menu navbar-dropdown-caret dropdown-menu-card py-0">
                            <div className="border-0 scrollbar" style={{ maxHeight: "60vh" }}>
                                <div className="px-3 pt-4 pb-3 img-dropdown">
                                    <div className="row gx-4 gy-5">
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <div className="dropdown-item-group">
                                                <span
                                                    className="me-2"
                                                    data-feather="file-text"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">Forms</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/form-control.html"
                                            >
                                                Form control
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/input-group.html"
                                            >
                                                Input group
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/select.html"
                                            >
                                                Select
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/checks.html"
                                            >
                                                Checks
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/range.html"
                                            >
                                                Range
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/floating-labels.html"
                                            >
                                                Floating labels
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/basic/layout.html"
                                            >
                                                Layout
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/advance-select.html"
                                            >
                                                Advance select
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/date-picker.html"
                                            >
                                                Date picker
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/editor.html"
                                            >
                                                Editor
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/file-uploader.html"
                                            >
                                                File uploader
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/rating.html"
                                            >
                                                Rating
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/advance/emoji-button.html"
                                            >
                                                Emoji button
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/validation.html"
                                            >
                                                Validation
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/forms/wizard.html"
                                            >
                                                Wizard
                                            </a>
                                            <div className="dropdown-item-group mt-5">
                                                <span
                                                    className="me-2"
                                                    data-feather="grid"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">Icons</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/icons/feather.html"
                                            >
                                                Feather
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/icons/font-awesome.html"
                                            >
                                                Font awesome
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/icons/unicons.html"
                                            >
                                                Unicons
                                            </a>
                                            <div className="dropdown-item-group mt-5">
                                                <span
                                                    className="me-2"
                                                    data-feather="bar-chart-2"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">ECharts</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/line-charts.html"
                                            >
                                                Line charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/bar-charts.html"
                                            >
                                                Bar charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/candlestick-charts.html"
                                            >
                                                Candlestick charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/geo-map.html"
                                            >
                                                Geo map
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/scatter-charts.html"
                                            >
                                                Scatter charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/pie-charts.html"
                                            >
                                                Pie charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/gauge-chart.html"
                                            >
                                                Gauge chart
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/radar-charts.html"
                                            >
                                                Radar charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/heatmap-charts.html"
                                            >
                                                Heatmap charts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/echarts/how-to-use.html"
                                            >
                                                How to use
                                            </a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <div className="dropdown-item-group">
                                                <span
                                                    className="me-2"
                                                    data-feather="package"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">Components</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/accordion.html"
                                            >
                                                Accordion
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/avatar.html"
                                            >
                                                Avatar
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/alerts.html"
                                            >
                                                Alerts
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/badge.html"
                                            >
                                                Badge
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/breadcrumb.html"
                                            >
                                                Breadcrumb
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/button.html"
                                            >
                                                Buttons
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/calendar.html"
                                            >
                                                Calendar
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/card.html"
                                            >
                                                Card
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/carousel/bootstrap.html"
                                            >
                                                Bootstrap
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/carousel/swiper.html"
                                            >
                                                Swiper
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/collapse.html"
                                            >
                                                Collapse
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/dropdown.html"
                                            >
                                                Dropdown
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/list-group.html"
                                            >
                                                List group
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/modal.html"
                                            >
                                                Modals
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/navs-and-tabs/navs.html"
                                            >
                                                Navs
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/navs-and-tabs/navbar.html"
                                            >
                                                Navbar
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/navs-and-tabs/tabs.html"
                                            >
                                                Tabs
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/offcanvas.html"
                                            >
                                                Offcanvas
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/progress-bar.html"
                                            >
                                                Progress bar
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/placeholder.html"
                                            >
                                                Placeholder
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/pagination.html"
                                            >
                                                Pagination
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/popovers.html"
                                            >
                                                Popovers
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/scrollspy.html"
                                            >
                                                Scrollspy
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/sortable.html"
                                            >
                                                Sortable
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/spinners.html"
                                            >
                                                Spinners
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/toast.html"
                                            >
                                                Toast
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/tooltips.html"
                                            >
                                                Tooltips
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/components/chat-widget.html"
                                            >
                                                Chat widget
                                            </a>
                                        </div>
                                        <div className="col-12 col-sm-6 col-md-4">
                                            <div className="dropdown-item-group">
                                                <span
                                                    className="me-2"
                                                    data-feather="columns"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">Tables</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/tables/basic-tables.html"
                                            >
                                                Basic tables
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/tables/advance-tables.html"
                                            >
                                                Advance tables
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/tables/bulk-select.html"
                                            >
                                                Bulk Select
                                            </a>
                                            <div className="dropdown-item-group mt-5">
                                                <span
                                                    className="me-2"
                                                    data-feather="tool"
                                                    style={{ strokeWidth: 2 }}
                                                />
                                                <h6 className="dropdown-item-title">Utilities</h6>
                                            </div>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/background.html"
                                            >
                                                Background
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/borders.html"
                                            >
                                                Borders
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/colors.html"
                                            >
                                                Colors
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/display.html"
                                            >
                                                Display
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/flex.html"
                                            >
                                                Flex
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/stacks.html"
                                            >
                                                Stacks
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/float.html"
                                            >
                                                Float
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/grid.html"
                                            >
                                                Grid
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/interactions.html"
                                            >
                                                Interactions
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/opacity.html"
                                            >
                                                Opacity
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/overflow.html"
                                            >
                                                Overflow
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/position.html"
                                            >
                                                Position
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/shadows.html"
                                            >
                                                Shadows
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/sizing.html"
                                            >
                                                Sizing
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/spacing.html"
                                            >
                                                Spacing
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/typography.html"
                                            >
                                                Typography
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/vertical-align.html"
                                            >
                                                Vertical align
                                            </a>
                                            <a
                                                className="dropdown-link"
                                                href="../../../modules/utilities/visibility.html"
                                            >
                                                Visibility
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle lh-1"
                            href="#!"
                            role="button"
                            data-bs-toggle="dropdown"
                            data-bs-auto-close="outside"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <span className="uil fs-8 me-2 uil-document-layout-right" />
                            Documentation
                        </a>
                        <ul className="dropdown-menu navbar-dropdown-caret">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../documentation/getting-started.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="life-buoy" />
                                        Getting started
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown dropdown-inside">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="customization"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="settings" />
                                            Customization
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/customization/configuration.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Configuration
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/customization/styling.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Styling
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/customization/color.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Color
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/customization/dark-mode.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Dark mode
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/customization/plugin.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Plugin
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown dropdown-inside">
                                <a
                                    className="dropdown-item dropdown-toggle"
                                    id="layouts-doc"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                    data-bs-auto-close="outside"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="uil fs-8 uil-angle-right lh-1 dropdown-indicator-icon" />
                                        <span>
                                            <span className="me-2 uil" data-feather="table" />
                                            Layouts doc
                                        </span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/layouts/vertical-navbar.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Vertical navbar
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/layouts/horizontal-navbar.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Horizontal navbar
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/layouts/combo-navbar.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Combo navbar
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="dropdown-item"
                                            href="../../../documentation/layouts/dual-nav.html"
                                        >
                                            <div className="dropdown-item-wrapper">
                                                <span className="me-2 uil" />
                                                Dual nav
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../documentation/gulp.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 fa-brands fa-gulp ms-1 me-1 fa-lg" />
                                        Gulp
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="../../../documentation/design-file.html"
                                >
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="figma" />
                                        Design file
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../../changelog.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="git-merge" />
                                        Changelog
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="../../../showcase.html">
                                    <div className="dropdown-item-wrapper">
                                        <span className="me-2 uil" data-feather="monitor" />
                                        Showcase
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <ul className="navbar-nav navbar-nav-icons flex-row">
                <li className="nav-item">
                    <div className="theme-control-toggle fa-icon-wait px-2">
                        <input
                            className="form-check-input ms-0 theme-control-toggle-input"
                            type="checkbox"
                            data-theme-control="phoenixTheme"
                            defaultValue="dark"
                            id="themeControlToggle"
                        />
                        <label
                            className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                            htmlFor="themeControlToggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Switch theme"
                        >
                            <span className="icon" data-feather="moon" />
                        </label>
                        <label
                            className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                            htmlFor="themeControlToggle"
                            data-bs-toggle="tooltip"
                            data-bs-placement="left"
                            title="Switch theme"
                        >
                            <span className="icon" data-feather="sun" />
                        </label>
                    </div>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#searchBoxModal"
                    >
                        <span
                            data-feather="search"
                            style={{ height: 19, width: 19, marginBottom: 2 }}
                        />
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        href="#"
                        style={{ minWidth: "2.25rem" }}
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                    >
                        <span data-feather="bell" style={{ height: 20, width: 20 }} />
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
                        id="navbarDropdownNotfication"
                        aria-labelledby="navbarDropdownNotfication"
                    >
                        <div className="card position-relative border-0">
                            <div className="card-header p-2">
                                <div className="d-flex justify-content-between">
                                    <h5 className="text-body-emphasis mb-0">Notificatons</h5>
                                    <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
                                        Mark all as read
                                    </button>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../../assets/img/team/40x40/30.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                                                        comment.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                                            10m
                                                        </span>
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">10:41 AM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <div className="avatar-name rounded-circle">
                                                        <span>J</span>
                                                    </div>
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">Jane Foster</h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">📅</span>Created an event.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                                            20m
                                                        </span>
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">10:20 AM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <img
                                                        className="rounded-circle avatar-placeholder"
                                                        src="../../../assets/img/team/40x40/avatar.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">👍</span>Liked your
                                                        comment.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                                            1h
                                                        </span>
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">9:30 AM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../../assets/img/team/40x40/57.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">
                                                        Kiera Anderson
                                                    </h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">💬</span>Mentioned you in a
                                                        comment.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">9:11 AM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative unread border-bottom">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../../assets/img/team/40x40/59.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">Herman Carter</h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">👤</span>Tagged you in a
                                                        comment.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">10:58 PM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-2 px-sm-3 py-3 notification-card position-relative read ">
                                        <div className="d-flex align-items-center justify-content-between position-relative">
                                            <div className="d-flex">
                                                <div className="avatar avatar-m status-online me-3">
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../../assets/img/team/40x40/58.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1 me-sm-3">
                                                    <h4 className="fs-9 text-body-emphasis">
                                                        Benjamin Button
                                                    </h4>
                                                    <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                        <span className="me-1 fs-10">👍</span>Liked your
                                                        comment.
                                                        <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10" />
                                                    </p>
                                                    <p className="text-body-secondary fs-9 mb-0">
                                                        <span className="me-1 fas fa-clock" />
                                                        <span className="fw-bold">10:18 AM </span>August 7,2021
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-none d-sm-block">
                                                <button
                                                    className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none notification-dropdown-toggle"
                                                    type="button"
                                                    data-bs-toggle="dropdown"
                                                    data-boundary="window"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    data-bs-reference="parent"
                                                >
                                                    <span className="fas fa-ellipsis-h fs-10 text-body" />
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-end py-2">
                                                    <a className="dropdown-item" href="#!">
                                                        Mark as unread
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer p-0 border-top border-translucent border-0">
                                <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                                    <a className="fw-bolder" href="../../../pages/notifications.html">
                                        Notification history
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        id="navbarDropdownNindeDots"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        data-bs-auto-close="outside"
                        aria-expanded="false"
                    >
                        <svg
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx={2} cy={2} r={2} fill="currentColor" />
                            <circle cx={2} cy={8} r={2} fill="currentColor" />
                            <circle cx={2} cy={14} r={2} fill="currentColor" />
                            <circle cx={8} cy={8} r={2} fill="currentColor" />
                            <circle cx={8} cy={14} r={2} fill="currentColor" />
                            <circle cx={14} cy={8} r={2} fill="currentColor" />
                            <circle cx={14} cy={14} r={2} fill="currentColor" />
                            <circle cx={8} cy={2} r={2} fill="currentColor" />
                            <circle cx={14} cy={2} r={2} fill="currentColor" />
                        </svg>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
                        aria-labelledby="navbarDropdownNindeDots"
                    >
                        <div className="card bg-body-emphasis position-relative border-0">
                            <div
                                className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                                style={{ height: "20rem" }}
                            >
                                <div className="row text-center align-items-center gx-0 gy-0">
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/behance.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Behance
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/google-cloud.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Cloud
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/slack.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Slack
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/gitlab.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Gitlab
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/bitbucket.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                BitBucket
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/google-drive.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Drive
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/trello.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Trello
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/figma.webp"
                                                alt=""
                                                width={20}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Figma
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/twitter.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Twitter
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/pinterest.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Pinterest
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/ln.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Linkedin
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/google-maps.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Maps
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/google-photos.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Photos
                                            </p>
                                        </a>
                                    </div>
                                    <div className="col-4">
                                        <a
                                            className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                            href="#!"
                                        >
                                            <img
                                                src="../../../assets/img/nav-icons/spotify.webp"
                                                alt=""
                                                width={30}
                                            />
                                            <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">
                                                Spotify
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a
                        className="nav-link lh-1 pe-0"
                        id="navbarDropdownUser"
                        href="#!"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <div className="avatar avatar-l ">
                            <img
                                className="rounded-circle "
                                src="../../../assets/img/team/40x40/57.webp"
                                alt=""
                            />
                        </div>
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-profile shadow border"
                        aria-labelledby="navbarDropdownUser"
                    >
                        <div className="card position-relative border-0">
                            <div className="card-body p-0">
                                <div className="text-center pt-4 pb-3">
                                    <div className="avatar avatar-xl ">
                                        <img
                                            className="rounded-circle "
                                            src="../../../assets/img/team/72x72/57.webp"
                                            alt=""
                                        />
                                    </div>
                                    <h6 className="mt-2 text-body-emphasis">Jerry Seinfield</h6>
                                </div>
                                <div className="mb-3 mx-3">
                                    <input
                                        className="form-control form-control-sm"
                                        id="statusUpdateInput"
                                        type="text"
                                        placeholder="Update your status"
                                    />
                                </div>
                            </div>
                            <div className="overflow-auto scrollbar" style={{ height: "10rem" }}>
                                <ul className="nav d-flex flex-column mb-2 pb-1">
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="user" />
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            <span className="me-2 text-body" data-feather="pie-chart" />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="lock" />
                                            Posts &amp; Activity
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="settings" />
                                            Settings &amp; Privacy{" "}
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="help-circle" />
                                            Help Center
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="globe" />
                                            Language
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer p-0 border-top border-translucent">
                                <ul className="nav d-flex flex-column my-3">
                                    <li className="nav-item">
                                        <a className="nav-link px-3" href="#!">
                                            {" "}
                                            <span className="me-2 text-body" data-feather="user-plus" />
                                            Add another account
                                        </a>
                                    </li>
                                </ul>
                                <hr />
                                <div className="px-3">
                                    {" "}
                                    <a
                                        className="btn btn-phoenix-secondary d-flex flex-center w-100"
                                        href="#!"
                                    >
                                        {" "}
                                        <span className="me-2" data-feather="log-out">
                                            {" "}
                                        </span>
                                        Sign out
                                    </a>
                                </div>
                                <div className="my-2 text-center fw-bold fs-10 text-body-quaternary">
                                    <a className="text-body-quaternary me-1" href="#!">
                                        Privacy policy
                                    </a>
                                    •
                                    <a className="text-body-quaternary mx-1" href="#!">
                                        Terms
                                    </a>
                                    •
                                    <a className="text-body-quaternary ms-1" href="#!">
                                        Cookies
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>

    )
}

export default NavBarTop
