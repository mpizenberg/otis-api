const express = require('express')
const app = module.exports = express()
const path = require('path')
const compression = require('compression')
const bodyParser = require('body-parser')
const util = require('util')
const mkdirp = util.promisify( require('mkdirp') )
const writeFile = util.promisify( require('fs').writeFile )


// Config based on .env file (transferred to process.env)
require('dotenv').config( { path: path.join( __dirname, '.env' ) } )
const resources = require( process.env.RESOURCES_FILE )
const saveDir = process.env.SAVE_DIR
let nextUserID = parseInt( process.env.START_USER_ID, 10 )


// Middlewares ( bodyparser, gzip, ... )
app.use( bodyParser.json({ limit: '10mb' })) // support json encoded bodies
app.use( bodyParser.urlencoded({ extended: true, limit: '1mb' })) // support encoded bodies
app.use( compression() ) // gzip


// API
app.use( '/static', express.static( path.join(__dirname, 'resources' ) ) )
app.get( '/resources', ( req, res ) => { res.json( resources ) })
app.post( '/save', ( req, res ) => saveResults( req, res, saveDir ) )


// Saving results
async function saveResults( req, res, dir ) {
	const userID = nextUserID
	nextUserID += 1
	const fileName = userID.toString() + '.json'
	const fileDir = path.join( __dirname, dir )
	const filePath = path.join( fileDir, fileName )
	await mkdirp( fileDir )
	await writeFile( filePath, JSON.stringify( req.body ) )
	console.log( "Saved file " + fileName )
	res.json( { userID: userID } )
}
