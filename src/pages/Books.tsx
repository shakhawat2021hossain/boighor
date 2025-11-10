import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Edit, Trash2, Eye } from "lucide-react"
import { useGetBooksQuery } from "@/redux/api/baseApi"
import type { IBook } from "@/types"

const Books = () => {
  const {data: books, isLoading} = useGetBooksQuery(undefined)
  if(isLoading) return <div>Loading...</div>

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md max-w-7xl mx-auto my-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Book List</h2>
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
          {books.map((book: IBook) => (
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
  )
}

export default Books