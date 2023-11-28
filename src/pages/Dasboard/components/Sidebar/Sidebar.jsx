// Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Icon from "@mdi/react";
import {
    mdiViewDashboard,
    mdiPostOutline,
    mdiMessageBadgeOutline,
    mdiAccount
} from "@mdi/js";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
    const location = useLocation();

    const isActiveTab = path => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <div
            className="nav flex-column nav-pills pr"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
        >
            <Link
                to="/dasboard"
                className={`nav-link ${isActiveTab(
                    "/dasboard"
                )} sidebr rounded-2 mb-2`}
            >
                <Icon path={mdiViewDashboard} size={2} className="mr-2" />
                Dashboard
            </Link>
            <Link
                to="/dasboard/pesan"
                className={`nav-link ${isActiveTab(
                    "/dasboard/pesan"
                )} sidebr rounded-2 mb-2`}
            >
                <Icon path={mdiMessageBadgeOutline} size={2} />
                Pesan
            </Link>
            <Link
                to="/dasboard/profil"
                className={`nav-link ${isActiveTab(
                    "/dasboard/profil"
                )} sidebr rounded-2 mb-2`}
            >
                <Icon path={mdiAccount} size={2} />
                Profil
            </Link>
            <Link
                to="/dasboard/post"
                className={`nav-link ${isActiveTab(
                    "/dasboard/post"
                )} sidebr rounded-2 mb-2`}
            >
                <Icon path={mdiPostOutline} size={2} />
                Postingan
            </Link>
        </div>
    );
}

export default Sidebar;
