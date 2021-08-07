import * as React from 'react';
import "./ListLoading.scss"
import "../BlockListing.scss"
import "./BlockItem.scss"
import { BlockHeader } from './BlockItem';
const ListLoading = () => {
    return (
        <div className="block-listing card">
            <div>
                <div className="wrapper">
                    <div className="wrapper-cell">
                        <table>
                            <thead className="block-item ">
                                <tr >
                                    <th className="cell-hash">Hash</th>
                                    <th className="cell-time">Time</th>
                                    <th className="cell-height">Height</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    Array(8)
                                        .fill(0)
                                        .map(item => {
                                            return (
                                                <tr className="block-item  animated-background ">
                                                    <td className="cell-hash"></td>
                                                    <td className="cell-time"></td>
                                                    <td className="cell-height"></td>
                                                </tr>
                                            );
                                        })
                                }
                            </tbody>
                        </table>

                    </div>


                </div>
            </div>
        </div>
    );
}

export { ListLoading }