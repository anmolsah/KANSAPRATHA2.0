import React, { useEffect, useState } from "react";
import Ratings from "./Ratings";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import RatingReact from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  customer_review,
  get_reviews,
  messageClear,
  product_details,
} from "../store/reducers/homeReducer";
import toast from "react-hot-toast";

const Reviews = ({ product }) => {
  const dispatch = useDispatch();
  const [perPage, setPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, reviews, rating_review, totalReview } = useSelector(
    (state) => state.home
  );
  const [rate, setRate] = useState("");
  const [rev, setRev] = useState("");

  const review_submit = (e) => {
    e.preventDefault();
    const obj = {
      name: userInfo.name,
      review: rev,
      rating: rate,
      productId: product._id,
    };
    dispatch(customer_review(obj));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(
        get_reviews({
          productId: product._id,
          pageNumber,
        })
      );
      dispatch(product_details(product.slug));
      setRate("");
      setRev("");
      dispatch(messageClear());
    }
  }, [successMessage]);

  useEffect(() => {
    if (product._id) {
      dispatch(
        get_reviews({
          productId: product._id,
          pageNumber,
        })
      );
    }
  }, [product, pageNumber]);
  return (
    <div className="mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        <div className="flex flex-col gap-2 items-center md:items-start py-4">
          <div>
            <span className="text-4xl md:text-6xl font-semibold">
              {product.rating}
            </span>
            <span className="text-xl md:text-3xl font-semibold text-slate-600">
              /5
            </span>
          </div>
          <div className="flex text-xl md:text-3xl">
            <Ratings ratings={product.rating} />
          </div>
          <p className="text-sm text-slate-600">({totalReview}) Reviews</p>
        </div>

        <div className="flex flex-col gap-2 py-4 flex-1">
          {[5, 4, 3, 2, 1].map((rating) => {
            const matchedRating = rating_review.find(
              (r) => r.rating === rating
            );
            const count = matchedRating ? matchedRating.sum : 0;
            const percent = totalReview
              ? Math.floor((count / totalReview) * 100)
              : 0;

            return (
              <div
                key={rating}
                className="flex flex-col md:flex-row md:items-center gap-3 md:gap-5"
              >
                <div className="text-md flex gap-1 w-20 md:w-24">
                  <RatingTemp rating={rating} />
                </div>
                <div className="flex-1 flex items-center gap-3">
                  <div className="w-full md:w-48 h-3 bg-slate-200 rounded">
                    <div
                      className="h-full bg-yellow-400 rounded"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 min-w-[30px]">{count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="text-slate-600 text-lg md:text-xl font-bold py-5">
        Product Reviews ({totalReview})
      </h2>
      <div className="flex flex-col gap-6 pb-10 pt-4">
        {reviews.map((r, i) => (
          <div key={i} className="flex flex-col gap-2 border-b pb-6">
            <div className="flex flex-col md:flex-row justify-between gap-2">
              <div className="flex gap-1 text-lg">
                <RatingTemp rating={r.rating} />
              </div>
              <span className="text-slate-600 text-sm">{r.date}</span>
            </div>
            <span className="text-slate-600 text-sm md:text-md">{r.name}</span>
            <p className="text-slate-600 text-sm leading-relaxed">{r.review}</p>
          </div>
        ))}

        <div className="flex justify-center md:justify-end">
          {totalReview > 5 && (
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={totalReview}
              perPage={perPage}
              showItem={Math.floor(totalReview / 3)}
            />
          )}
        </div>
      </div>

      <div className="pb-10">
        {userInfo ? (
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            <div className="flex gap-1 justify-center md:justify-start">
              <RatingReact
                onChange={(e) => setRate(e)}
                initialRating={rate}
                emptySymbol={
                  <span className="text-yellow-400 text-3xl md:text-4xl">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-yellow-400 text-3xl md:text-4xl">
                    <FaStar />
                  </span>
                }
              />
            </div>
            <form onSubmit={review_submit} className="space-y-4">
              <textarea
                value={rev}
                onChange={(e) => setRev(e.target.value)}
                className="border outline-none p-3 w-full rounded-md text-sm md:text-base"
                placeholder="Write your review..."
                cols="30"
                rows="5"
                required
              ></textarea>
              <div className="flex justify-end">
                <button className="py-2 px-6 bg-yellow-600 text-white rounded-md w-full md:w-auto">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <Link
              to="/login"
              className="inline-block py-2 px-6 bg-yellow-500 text-white rounded-md text-sm md:text-base"
            >
              Login to Write a Review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
