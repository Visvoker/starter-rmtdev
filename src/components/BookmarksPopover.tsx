import { forwardRef } from "react";
import { useBookmarksContext } from "../lib/hook";
import JobList from "./JobList";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_props, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();
  return (
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>
  );
});

export default BookmarksPopover;
