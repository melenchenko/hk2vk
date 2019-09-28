import React, { useState, setState, useEffect } from 'react';
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

import './globals.js';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	// const [popout, setPopout] = useState(this);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const goQuest = e => {
		global._quest_id = e.currentTarget.dataset.quest;
		setActivePanel('quest');
	};

	return (
		<Epic tabbar={
			<Tabbar>
				<TabbarItem onClick={go} data-to='home'>
					Все квесты
				</TabbarItem>
				<TabbarItem onClick={go} data-to='myquests'>
					Мои квесты
				</TabbarItem>
				<TabbarItem onClick={go} data-to='status'>
					Достижения
				</TabbarItem>
				<TabbarItem onClick={go} data-to='profile'>
					Профиль
				</TabbarItem>
				<TabbarItem onClick={go} data-to='users'>
					Рейтинг
				</TabbarItem>
			</Tabbar>
		}>
			<View activePanel={activePanel} popout={popout}>
				<Home id='home' fetchedUser={fetchedUser} go={go} goQuest={goQuest} />
				<Persik id='persik' fetchedUser={fetchedUser} go={go} />
				<Quest id='quest' fetchedUser={fetchedUser} go={go} />
				<MyQuests id='myquests' fetchedUser={fetchedUser} go={go} />
				<Status id='status' fetchedUser={fetchedUser} go={go} />
				<Profile id='profile' fetchedUser={fetchedUser} go={go} />
				<Users id='users' fetchedUser={fetchedUser} go={go} />
				<Map id='map' fetchedUser={fetchedUser} go={go} />
				<AddQuest id='addquest' fetchedUser={fetchedUser} go={go} />
			</View>
		</Epic>
	);
}

export default App;

