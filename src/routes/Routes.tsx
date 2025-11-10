import CommonLayout from "@/Layout/CommonLayout";
import Books from "@/pages/Books";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [

            {
                path: "/books",
                element: <Books />
            }
        ]
    }
])