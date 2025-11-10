import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { useBorrowedBooksQuery } from "@/redux/api/baseApi";
import { Loader } from "lucide-react";

interface IBorrowSummary {
  book: {
    title: string;
    isbn: string;
  };
  totalQuantity: number;
}

const Summary = () => {
  const { data: summary, isLoading, isError } = useBorrowedBooksQuery(undefined);
  console.log(summary)

  if (isLoading) return <div className="flex justify-center items-center h-64">
    <Loader className="h-8 w-8 animate-spin text-primary" />
  </div>
  if (isError) return <div className="text-center text-red-500 mt-6">Failed to load summary.</div>;

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md max-w-5xl mx-auto my-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">
            Borrow Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>ISBN</TableHead>
                <TableHead className="text-right">Total Quantity Borrowed</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {summary && summary.length > 0 ? (
                summary.map((item: IBorrowSummary, idx: number) => (
                  <TableRow key={idx}>
                    <TableCell>{item.book?.title}</TableCell>
                    <TableCell>{item.book?.isbn}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="secondary">{item.totalQuantity}</Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                    No borrowed books found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Summary;
