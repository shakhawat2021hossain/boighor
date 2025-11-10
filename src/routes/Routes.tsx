import CommonLayout from "@/Layout/CommonLayout";
import BookDetails from "@/pages/BookDetails";
import Books from "@/pages/Books";
import Summary from "@/pages/Summary";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <CommonLayout />,
        children: [
            {
                path: "/",
                element: <Books/>

            },

            {
                path: "/books",
                element: <Books />
            },
            {
                path: "/books/:id",
                element: <BookDetails />
            },
            {
                path: "/summary",
                element: <Summary />
            }
        ]
    }
])