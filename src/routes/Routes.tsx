import CommonLayout from "@/Layout/CommonLayout";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />
    }
])