// Default hard-coded values
export const CONFIG: {
  AP_TIMETACTICS_PUBLIC: string
  AP_TIMETACTICS_ENVIRONMENT: string
} = {
  AP_TIMETACTICS_PUBLIC: '',
  AP_TIMETACTICS_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_TIMETACTICS_PUBLIC) {
    CONFIG.AP_TIMETACTICS_PUBLIC = process.env.AP_TIMETACTICS_PUBLIC
  }
  if (process.env.AP_TIMETACTICS_ENVIRONMENT) {
    CONFIG.AP_TIMETACTICS_ENVIRONMENT = process.env.AP_TIMETACTICS_ENVIRONMENT
  }
} catch (error) {
  console.warn('Failed to load from process.env')
}

console.log('CONFIG')
Object.keys(CONFIG).forEach((confKey) => {
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})
