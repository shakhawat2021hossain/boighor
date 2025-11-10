import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import AddBookForm from "@/components/AddBookForm";
import { Edit, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Books = () => {
    const { data: books = [], isLoading, refetch } = useGetBooksQuery({});
    const [open, setOpen] = useState(false);

    if (isLoading) return <div className="text-center mt-10">Loading...</div>;

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
                                <Button variant="outline" size="icon">
                                    <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="destructive" size="icon">
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
