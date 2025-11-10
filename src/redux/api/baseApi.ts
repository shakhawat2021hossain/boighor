import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "../axiosBaseQuery";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: axiosBaseQuery(),
    tagTypes: ["book", "borrow"],
    endpoints: (builder) => ({
        getBooks: builder.query({
            query: () => ({
                url: '/books',
                method: "GET"
            }),
            providesTags: ["book"],
            transformResponse: (response) => response?.data
        }),
        getBook: builder.query({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: "GET"
            }),
            providesTags: ["book"],
            transformResponse: (response) => response?.data
        }),
        addBook: builder.mutation({
            query: (book) => ({
                url: '/books',
                method: "POST",
                data: book
            }),
            invalidatesTags: ["book"]
        }),
        editBook: builder.mutation({
            query: ({ bookId, editData }) => ({
                url: `/books/${bookId}`,
                method: "PUT",
                data: editData
            }),
            invalidatesTags: ["book"]

        }),
        deleteBook: builder.mutation({
            query: (bookId) => ({
                url: `/books/${bookId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["book"]

        }),
        borrowBook: builder.mutation({
            query: (borrowData) => ({
                url: '/borrow',
                method: "POST",
                data: borrowData
            }),
            invalidatesTags: ["book", "borrow"]
        }),
        borrowedBooks: builder.query({
            query: () => ({
                url: '/borrow',
                method: "GET",
            }),
            providesTags: ["borrow"],
            transformResponse: (response) => response?.data
        }),

    })
})

export const {
    useGetBooksQuery, useAddBookMutation, useBorrowBookMutation, useEditBookMutation, useDeleteBookMutation,
    useBorrowedBooksQuery,
    useGetBookQuery
} = baseApi