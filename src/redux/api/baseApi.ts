import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '/books',
                method: "GET"
            }),
            transformResponse: (response) => response?.data
        }),
        addBook: builder.mutation({
            query: (book) => ({
                url: '/books',
                method: "POST",
                data: book
            })
        }),
        editBook: builder.mutation({
            query: ({bookId, editData}) => ({
                url: `/books/${bookId}`,
                method: "PUT",
                data: editData
            })
        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: '/borrow',
                method: "POST",
                data: borrowData
            })
        }),

    })
})

export const { useGetBooksQuery, useAddBookMutation, useBorrowBookMutation, useEditBookMutation } = baseApi