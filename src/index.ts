import { Dictionary } from './types'
import { readFileSync } from 'fs'
import { Telegraf } from 'telegraf'
import { load as yamlLoad } from 'js-yaml'

const config: Dictionary<any> = yamlLoad(
  readFileSync('./config.yml', 'utf-8')
) as Object
const token = config.token as string
const bot = new Telegraf(token)
bot.on('message', () => {})
