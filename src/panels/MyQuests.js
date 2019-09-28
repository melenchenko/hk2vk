import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

import { HeaderButton, Tabs, TabsItem, View } from '@vkontakte/vkui';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon24Add from '@vkontakte/icons/dist/24/add';

class MyQuests extends React.Component {
	constructor(props) {
		super(props);
		this.propTypes = {
			id: PropTypes.string.isRequired,
			go: PropTypes.func.isRequired,
			fetchedUser: PropTypes.shape({
				photo_200: PropTypes.string,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				city: PropTypes.shape({
					title: PropTypes.string,
				}),
			}),
		};
	}

	componentDidMount() {
		console.log('myquests mount');
	}

	render() {
		let id = this.props.id;
		let go = this.props.go;
		let fetchedUser = this.props.fetchedUser;
		return (
			<Panel id={id}>
				<PanelHeader 
					left={<HeaderButton key="addquest"><Icon24Add onClick={go} data-to="addquest"/></HeaderButton>}>
					Мои задания
				</PanelHeader>
				{fetchedUser &&
				<Group title="User Data Fetched with VK Connect">
					<Cell
						before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
						description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
					>
						{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
					</Cell>
				</Group>}
				<Group title="Navigation Example">				
						<Tabs>
							<TabsItem onClick={() => this.setState({ activeTab1: 'tabActiv' })}>
								Активные
							</TabsItem>
							<TabsItem id="tabWork">В работе</TabsItem>
							<TabsItem id="tabReady">Выполненные</TabsItem>
							<TabsItem id="tabMy">Размещенные мной</TabsItem>
						</Tabs>
				</Group>
				<div id="activeTab2">
								<div>
									dfkjghdfkjghf
								</div>
							</div>
				<Group name="tabWork">
					<p>tabWork</p>
				</Group>
				<Group name="tabReady">
					<p>tabReady</p>
				</Group>
				<Group name="tabMy">
					<p>tabMy</p>
				</Group>
			</Panel>
		);
	}
}

export default MyQuests;
