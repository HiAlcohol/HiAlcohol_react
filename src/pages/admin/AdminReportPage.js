import Header from '../../components/Header'
import ReportBoards from '../../components/admin/ReportBoards'
import axios from "axios";
import { useEffect, useState } from "react";

function AdminReport() {
	const [reports, setReports] = useState(null);
	const [reportsComent, setReportsComent] = useState(null);
	const [error, setError] = useState(null);

	useEffect( () => {
		const fetchReports = async () => {

			try {
				console.log('렌더링이 완료되었습니다!');
				const response = await axios.get(
					'http://3.35.208.41:5000/admin/reports/board'
				);
				setReports(response.data.data);
			} catch(e) {
				setError(e)
			}
		};
		const fetchReportsComent = async () => {

			try {
				console.log('렌더링이 완료되었습니다!');
				const response = await axios.get(
					'http://3.35.208.41:5000/admin/reports/comment'
				);
				setReports(response.data.data);
			} catch(e) {
				setError(e)
			}
		};
		fetchReportsComent();
		
	}, []);


	const dummy = [
		{key: 1, id:1, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
		{key: 2, id:2, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: false},
		{key: 3, id:3, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
		{key: 4, id:4, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: false}
	]
	return <>
		<Header></Header>
		<ReportBoards subtitle={'신고된 게시글'} boards={dummy}/>
		<ReportBoards subtitle={'신고된 댓글이 포함된 게시글'} boards={dummy}/>
		{/* <ReportBoards subtitle={'신고된 게시글'} boards={reports}/>
		<ReportBoards subtitle={'신고된 댓글이 포함된 게시글'} boards={reportsComent}/> */}
	</>
}

export default AdminReport;