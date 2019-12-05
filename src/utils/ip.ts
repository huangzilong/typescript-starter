import os from "os"

export const getIp = () => {
  const ifaces = os.networkInterfaces()
  let ip = ""
  Object.keys(ifaces).forEach(dev => {
    ifaces[dev].forEach(function (details) {
      if (details.family === "IPv4") {
        ip = details.address
      }
    })
  })
  return ip
}
