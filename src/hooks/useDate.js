import { formatDistanceToNow } from "date-fns";

function useDateFormater(date) {
  const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
  let newTimeAgo = timeAgo.split(" ");
  let value = "";
  console.log()
  if (newTimeAgo.includes("hours")) {
    value = ` ${newTimeAgo.at(0)}  ساعت پیش در    `;
  } else if (newTimeAgo.includes("hour")) {
    value = ` ${newTimeAgo.at(1)}  ساعت پیش در    `;
  } else if (newTimeAgo.includes("days")) {
    value = `${newTimeAgo.at(0)}   روز پیش در   `;
  } else if (newTimeAgo.includes("less")) {
    value = " لحظاتی پیش در  ";
  } else if (newTimeAgo.includes("minute")) {
    value = `${newTimeAgo.at(0)} دقیقه پیش در `;
  } else if (newTimeAgo.includes("minutes")) {
    value = `${newTimeAgo.at(0)} دقیقه پیش در `;
  }else if (newTimeAgo.includes("month")) {
    value = `${newTimeAgo.at(1)} ماه پیش در `;
  }
  return value;
}
export { useDateFormater };
