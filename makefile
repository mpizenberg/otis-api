# INSTALL ##############################

CONFIG_FILE = .env

install :
	npm install
	echo "RESOURCES_FILE='./resources_list.json'" > $(CONFIG_FILE)
	echo "SAVE_DIR='results'" >> $(CONFIG_FILE)
	echo "START_USER_ID=1" >> $(CONFIG_FILE)
