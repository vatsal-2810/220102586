import axios from 'axios';

const LOG_API = 'http://20.244.56.144/evaluation-service/logs';

export async function Log(
  stack: 'frontend' | 'backend',
  level: 'debug' | 'info' | 'warn' | 'error' | 'fatal',
  pkg: string,
  message: string,
  token: string
) {
  try {
    const response = await axios.post(
      LOG_API,
      { stack, level, package: pkg, message },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log(`Log created successfully: ${response.data.logID}`);
  } catch (error) {
    console.error('Failed to log:', (error as Error).message);
  }
}
