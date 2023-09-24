// import { useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Outlet, useLocation } from "react-router-dom";

export default function Root() {
    return (
        <Layout>
            {useLocation().pathname === "/" ? (
                <h1>You are on the landing page!!!</h1>
            ) : (
                <></>
            )}
            <Outlet />
        </Layout>
    );
}
