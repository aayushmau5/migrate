import { parseISO, format } from "date-fns";

interface date {
  dateString: string;
}

const Date: React.FC<date> = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;
