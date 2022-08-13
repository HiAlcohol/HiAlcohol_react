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
		fetchReports();
		fetchReportsComent();
		
	}, []);
	// console.log("1", reports)
	// console.log("2", reportsComent)

	// if (error) return <div>에러가 발생했습니다. {error}</div>
	// if (!reports) return <div>데이터가 없습니다.</div>
	// if (!reportsComent) return <div>데이터가 없습니다.</div>

	const dummy = [
		{id:10, title: '잭콕', userName: '유저1', createDate: '2021.10.15', visible: true},
		{ id:2, title: '잭콕2', userName: '유저1', createDate: '2021.10.15', visible: false},	]

	const dummy2 = [
		{
            post: {
                id: "10",
                nickname: "게시글 작성자 닉네임",
                title: "게시글 제목",
                content: "게시글 내용",
                createdate: "게시글 작성일"
            },
            comment: {
                id: "1",
                nickname: "댓글 작성자 닉네임",
                content: "댓글 내용dlqsl",
                createdate: "댓글 작성일"
            },
            count: "신고 횟수"
        },{
			post: {
                id: "2",
                nickname: "게시글 작성자 닉네임",
                title: "게시글 제목2",
                content: "게시글 내용입니다",
                createdate: "게시글 작성일"
            },
            comment: { 
                id: "2",
                nickname: "댓글 작성자 닉네임",
                content: "댓글 내용입니다2",
                createdate: "댓글 작성일"
            },
            count: "신고 횟수"
        }
	]
	return <>
		<Header></Header>
		<ReportBoards boards={dummy} comments={dummy2} />
		{/* <ReportBoards subtitle={'신고된 게시글'} boards={dummy} type='board'/>
		<ReportBoards subtitle={'신고된 댓글이 포함된 게시글'} boards={dummy2} type='comment'/> */}
		{/* <ReportBoards subtitle={'신고된 게시글'} boards={reports}/> */}
		{/* <ReportBoards subtitle={'신고된 댓글이 포함된 게시글'} boards={reportsComent}/> */}
	</>
}

export default AdminReport;