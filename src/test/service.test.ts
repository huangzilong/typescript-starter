import { getIp } from '../utils/ip'

test('ip', () => {
  expect(/((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g.test(getIp())).toBe(true)
})
