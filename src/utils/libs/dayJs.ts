import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import UTCFormat from "dayjs/plugin/utc";

dayjs.extend(customParseFormat);
dayjs.extend(LocalizedFormat);
dayjs.extend(UTCFormat);

export default dayjs;
