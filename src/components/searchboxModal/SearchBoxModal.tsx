
const SearchBoxModal = () => {
    return (
        <div
            className="modal fade"
            id="searchBoxModal"
            tabIndex={-1}
            aria-hidden="true"
            data-bs-backdrop="true"
            data-phoenix-modal="data-phoenix-modal"
        >
            <div className="modal-dialog">
                <div className="modal-content mt-15 rounded-pill">
                    <div className="modal-body p-0">
                        <div
                            className="search-box navbar-top-search-box"
                            data-list='{"valueNames":["title"]}'
                            style={{ width: "auto" }}
                        >
                            <form
                                className="position-relative"
                                data-bs-toggle="search"
                                data-bs-display="static"
                            >
                                <input
                                    className="form-control search-input fuzzy-search rounded-pill form-control-lg"
                                    type="search"
                                    placeholder="Search..."
                                    aria-label="Search"
                                />
                                <span className="fas fa-search search-box-icon" />
                            </form>
                            <div
                                className="btn-close position-absolute end-0 top-50 translate-middle cursor-pointer shadow-none"
                                data-bs-dismiss="search"
                            >
                                <button className="btn btn-link p-0" aria-label="Close" />
                            </div>
                            <div className="dropdown-menu border start-0 py-0 overflow-hidden w-100">
                                <div className="scrollbar-overlay" style={{ maxHeight: "30rem" }}>
                                    <div className="list pb-3">
                                        <h6 className="dropdown-header text-body-highlight fs-10 py-2">
                                            24
                                            <span className="text-body-quaternary">results</span>
                                        </h6>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Recently Searched{" "}
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-clock-rotate-left"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Store Macbook
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-clock-rotate-left"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        MacBook Air - 13″
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Products
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item py-2 d-flex align-items-center"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="file-thumbnail me-2">
                                                    <img
                                                        className="h-100 w-100 fit-cover rounded-3"
                                                        src="../../../assets/img/products/60x60/3.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">
                                                        MacBook Air - 13″
                                                    </h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                                        <span className="fw-medium text-body-tertiary text-opactity-85">
                                                            8GB Memory - 1.6GHz - 128GB Storage
                                                        </span>
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item py-2 d-flex align-items-center"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="file-thumbnail me-2">
                                                    <img
                                                        className="img-fluid"
                                                        src="../../../assets/img/products/60x60/3.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">
                                                        MacBook Pro - 13″
                                                    </h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                                        <span className="fw-medium text-body-tertiary text-opactity-85 ms-2">
                                                            30 Sep at 12:30 PM
                                                        </span>
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Quick Links
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-link text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Support MacBook House
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-link text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Store MacBook″
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Files
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-file-zipper text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Library MacBook folder.rar
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-file-lines text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Feature MacBook extensions.txt
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-solid fa-image text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        MacBook Pro_13.jpg
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Members
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item py-2 d-flex align-items-center"
                                                href="../../../pages/members.html"
                                            >
                                                <div className="avatar avatar-l status-online  me-2 text-body">
                                                    <img
                                                        className="rounded-circle "
                                                        src="../../../assets/img/team/40x40/10.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">
                                                        Carry Anna
                                                    </h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                                        anna@technext.it
                                                    </p>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item py-2 d-flex align-items-center"
                                                href="../../../pages/members.html"
                                            >
                                                <div className="avatar avatar-l  me-2 text-body">
                                                    <img
                                                        className="rounded-circle "
                                                        src="../../../assets/img/team/40x40/12.webp"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h6 className="mb-0 text-body-highlight title">
                                                        John Smith
                                                    </h6>
                                                    <p className="fs-10 mb-0 d-flex text-body-tertiary">
                                                        smith@technext.it
                                                    </p>
                                                </div>
                                            </a>
                                        </div>
                                        <hr className="my-0" />
                                        <h6 className="dropdown-header text-body-highlight fs-9 border-bottom border-translucent py-2 lh-sm">
                                            Related Searches
                                        </h6>
                                        <div className="py-2">
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-brands fa-firefox-browser text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Search in the Web MacBook
                                                    </div>
                                                </div>
                                            </a>
                                            <a
                                                className="dropdown-item"
                                                href="../landing/product-details.html"
                                            >
                                                <div className="d-flex align-items-center">
                                                    <div className="fw-normal text-body-highlight title">
                                                        <span
                                                            className="fa-brands fa-chrome text-body"
                                                            data-fa-transform="shrink-2"
                                                        />{" "}
                                                        Store MacBook″
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <p className="fallback fw-bold fs-7 d-none">No Result Found.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchBoxModal
