import { notFound } from "next/navigation";

export default function ReviewDetail({
  params: { productId, reviewId },
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <div>
      Review {reviewId} for {productId} Details
    </div>
  );
}
