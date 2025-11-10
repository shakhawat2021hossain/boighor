import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetBookQuery, useDeleteBookMutation } from "@/redux/api/baseApi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2, ArrowLeft, Loader } from "lucide-react";
import toast from "react-hot-toast";

const BookDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { data: book, isLoading } = useGetBookQuery(id);
    const [deleteBook] = useDeleteBookMutation();

    if (isLoading) return <div className="flex justify-center items-center h-64">
        <Loader className="h-8 w-8 animate-spin text-primary" />
    </div>
    if (!book) return <div className="text-center mt-10">Book not found</div>;

    const handleDelete = async () => {
        await deleteBook(book._id);
        toast.success("Book deleted successfully");
        navigate("/books");
    };

    return (
        <div className="p-6 max-w-3xl mx-auto my-6">
            <Button
                variant="outline"
                className="mb-4"
                onClick={() => navigate("/books")}
            >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to List
            </Button>

            <Card>
                <CardHeader>
                    <CardTitle>{book.title}</CardTitle>
                    <CardDescription>{book.author}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <div>
                        <p><strong>Genre:</strong> {book.genre}</p>
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                        <p><strong>Copies:</strong> {book.copies}</p>
                        <p><strong>Availability:</strong>
                            {book.available ? (
                                <Badge className="bg-green-500 ml-2">Available</Badge>
                            ) : (
                                <Badge className="bg-red-500 ml-2">Out of Stock</Badge>
                            )}
                        </p>
                    </div>

                    {book.description && (
                        <div>
                            <strong>Description:</strong>
                            <p className="mt-1">{book.description}</p>
                        </div>
                    )}

                    <Button variant="destructive" onClick={handleDelete}>
                        <Trash2 className="w-4 h-4 mr-2" /> Delete Book
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default BookDetails;
