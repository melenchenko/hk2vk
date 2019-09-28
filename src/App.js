import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
import Quest from './panels/Quest';
import MyQuests from './panels/MyQuests';
import Status from './panels/Status';
import Profile from './panels/Profile';
import Users from './panels/Users';
import Map from './panels/Map';
import AddQuest from './panels/AddQuest';
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	// const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [popout, setPopout] = useState(this);

	useEffect(() => {
		// connect.subscribe(({ detail: { type, data }}) => {
		// 	if (type === 'VKWebAppUpdateConfig') {
		// 		const schemeAttribute = document.createAttribute('scheme');
		// 		schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
		// 		document.body.attributes.setNamedItem(schemeAttribute);
		// 	}
		// });
		// async function fetchData() {
		// 	const user = await connect.sendPromise('VKWebAppGetUserInfo');
		// 	setUser(user);
		// 	setPopout(null);
		// }
		// fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	return (
		<Epic tabbar={
			<Tabbar>
				<TabbarItem onClick={go} data-to='home'>
					CATALOG
				</TabbarItem>
				<TabbarItem onClick={go} data-to='quest'>
					QUEST
				</TabbarItem>
				<TabbarItem onClick={go} data-to='myquests'>
					MY QUESTS
				</TabbarItem>
				<TabbarItem onClick={go} data-to='status'>
					STATUS
				</TabbarItem>
				<TabbarItem onClick={go} data-to='profile'>
					PROFILE
				</TabbarItem>
				<TabbarItem onClick={go} data-to='users'>
					USERS
				</TabbarItem>
			</Tabbar>
		}>
			<View activePanel={activePanel} popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go} />
				<Persik id='persik' go={go} />
				<Quest id='quest' go={go} />
				<MyQuests id='myquests' go={go} />
				<Status id='status' go={go} />
				<Profile id='profile' go={go} />
				<Users id='users' go={go} />
				<Map id='map' go={go} />
				<AddQuest id='addquest' go={go} />
			</View>
		</Epic>
	);
}

export default App;

