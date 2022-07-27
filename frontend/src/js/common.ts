import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import 'dayjs/locale/ko'

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.tz.setDefault('Asia/Seoul')
dayjs.locale('ko')

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties{
        $dayjs: typeof dayjs;
    }
}