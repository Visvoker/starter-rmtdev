import { JobItem } from "../lib/type";
import BookmarkIcon from "./BookmarkIcon";

type JobListItemProps = {
  jobItem: JobItem;
};

export default function JobListItem({ jobItem }: JobListItemProps) {
  return (
    <li className="job-item">
      <a className="job-item__link" href={`#${jobItem.id}`}>
        <div className="job-item__badge">{jobItem.badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{jobItem.title}</h3>
          <p className="job-item__company">{jobItem.company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{jobItem.daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
