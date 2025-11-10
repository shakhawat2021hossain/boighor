import React from "react";
import {
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { borrowSchema, type borrowFormData } from "@/types/borrow.type";
import { useBorrowBookMutation } from "@/redux/api/baseApi";
import toast from "react-hot-toast";



interface BorrowBookModalProps {
    book: {
        _id: string;
        title: string;
        available: boolean;
        copies: number;
    };
    setBorrowOpen: (value: boolean) => void;
    refetch: () => void;
}

const BorrowBookForm: React.FC<BorrowBookModalProps> = ({ book, setBorrowOpen, refetch }) => {
    const [borrowBook] = useBorrowBookMutation()

    const form = useForm({
        resolver: zodResolver(borrowSchema),
        defaultValues: {
            quantity: 1,
            dueDate: "",
        },
    });

    const onSubmit = async (data: borrowFormData) => {
        try{
            await borrowBook({ ...data, book: book._id }).unwrap();
            console.log({ ...data, book: book._id });
            toast.success("Borrowed book successfully")
            refetch()
            setBorrowOpen(false)
            form.reset();
        }
        catch(error){
            console.log(error)
            setBorrowOpen(false)

        }
    };
    // if(isLoading) return <div>Loading..</div>

    return (

        <div>
            <DialogHeader>
                <DialogTitle>Borrow "{book.title}"</DialogTitle>
                <p>No of available books: {book.copies}</p>
            </DialogHeader>

           
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
                        {/* Quantity */}
                        <FormField
                            control={form.control}
                            name="quantity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Quantity</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter quantity"
                                            {...field}
                                            onChange={(e) => field.onChange(Number(e.target.value))}
                                            // max={book.copies}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Due Date */}
                        <FormField
                            control={form.control}
                            name="dueDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Due Date</FormLabel>
                                    <FormControl>
                                        <Input type="date" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Confirm Borrow
                        </Button>
                    </form>
                </Form>
        </div>
    );
};

export default BorrowBookForm;
