import { forwardRef } from "react";
import { useBookmarksContext } from "../lib/hook";
import JobList from "./JobList";
import { createPortal } from "react-dom";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_props, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();
  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});

export default BookmarksPopover;
