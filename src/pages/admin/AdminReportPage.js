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
					'http://43.200.182.67:5000/admin/reports/board'
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
					'http://43.200.182.67:5000/admin/reports/comment'
				);
				setReportsComent(response.data.data);
			} catch(e) {
				setError(e)
			}
		};
		fetchReportsComent();
		
	}, []);

	// if (error) return <div>에러가 발생했습니다. {error}</div>
	// if (!reports) return <div>데이터가 없습니다.</div>
	// if (!reportsComent) return <div>데이터가 없습니다.</div>

	const dummy = [
		{key: 1, id:12, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
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