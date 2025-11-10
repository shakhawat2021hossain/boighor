import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useDeleteBookMutation, useGetBooksQuery } from "@/redux/api/baseApi";
import AddBookForm from "@/components/AddBookForm";
import { Edit, Trash2, Eye, BookOpen, Loader } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EditBookForm from "@/components/EditBookForm";
import toast from "react-hot-toast";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import BorrowBookForm from "@/components/BorrowBookForm";
import { Link } from "react-router";

const Books = () => {
    const [selectedBook, setSelectedBook] = useState<any>(null);

    const { data: books = [], isLoading, refetch } = useGetBooksQuery({});
    const [deleteBook] = useDeleteBookMutation()
    console.log(books)

    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [borrowOpen, setBorrowOpen] = useState(false);
    console.log(borrowOpen)


    const onDelete = async (bookId: string) => {
        await deleteBook(bookId)
        toast.success("Deleted Book Successfully!")
        refetch();
    }


    if (isLoading) return <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
    </div>


    return (
        <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md max-w-7xl mx-auto my-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Book List</h2>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button>Add New Book</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                        <AddBookForm
                            onSuccess={() => {
                                setOpen(false);
                                refetch();
                            }}
                        />
                    </DialogContent>
                </Dialog>
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Copies</TableHead>
                        <TableHead>Availability</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {books.map((book: any) => (
                        <TableRow key={book._id}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author}</TableCell>
                            <TableCell>{book.genre}</TableCell>
                            <TableCell>{book.isbn}</TableCell>
                            <TableCell>{book.copies}</TableCell>
                            <TableCell>
                                {book.available ? (
                                    <Badge className="bg-green-500">Available</Badge>
                                ) : (
                                    <Badge className="bg-red-500">Out of Stock</Badge>
                                )}
                            </TableCell>

                            <TableCell className="text-right space-x-2">
                                <Link to={`/books/${book._id}`}>
                                    <Button variant="outline" size="icon">
                                        <Eye className="w-4 h-4" />
                                    </Button>
                                </Link>


                                <Dialog open={editOpen} onOpenChange={setEditOpen}>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="icon"
                                            onClick={() => {
                                                setSelectedBook(book)
                                            }}
                                        >
                                            <Edit className="w-4 h-4" />
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-md">
                                        <DialogHeader>
                                            <DialogTitle>Edit Book</DialogTitle>
                                        </DialogHeader>
                                        <EditBookForm book={selectedBook} refetch={refetch} setEditOpen={setEditOpen} />
                                    </DialogContent>
                                </Dialog>

                                {/* Borrow Button with Tooltip */}
                                <Dialog open={borrowOpen} onOpenChange={setBorrowOpen}>
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <DialogTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        disabled={!book.available || book.copies === 0}
                                                        onClick={() => {
                                                            setSelectedBook(book)
                                                        }}
                                                    >
                                                        <BookOpen className="w-4 h-4" />
                                                    </Button>
                                                </DialogTrigger>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Borrow</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    <DialogContent className="max-w-sm">
                                        <BorrowBookForm
                                            book={selectedBook} refetch={refetch} setBorrowOpen={setBorrowOpen}
                                        />
                                    </DialogContent>

                                </Dialog>

                                <Button variant="destructive" size="icon" onClick={() => onDelete(book._id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default Books;
