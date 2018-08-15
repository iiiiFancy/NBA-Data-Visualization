import React from 'react';
import { AutoComplete, Input, Icon } from 'antd';
import nba from 'nba';
import { PROFILE_PIC_URL_PREFIX } from '../constants';

const Option = AutoComplete.Option;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        console.log(value);
        this.setState({
            dataSource: !value ? [] : nba.searchPlayers(value).map(({ fullName, playerId }) => // dateSource里存<Option>
                <Option key={playerId} value={fullName}>
                    <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}/${playerId}.png`}/>
                    <span className="player-option-label">{fullName}</span>
                </Option>
            ),
        });
    }

    onSelect = (playerName) => {
        this.props.loadPlayerInfo(playerName);
    }

    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                className="search-bar"
                size="large"
                dataSource={dataSource} // 自动补全所基于的数据库
                onSelect={this.onSelect} // 选择或确认输入信息时调用
                onSearch={this.handleSearch} // 搜索框中输入信息时调用
                placeholder="Search NBA Player By Name"
                optionLabelProp="value" // 回填option中的哪个属性
            >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
            </AutoComplete>
        );
    }
}
