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
					'https://hialcohol.p-e.kr/admin/reports/board',
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					}
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
					'https://hialcohol.p-e.kr/admin/reports/comment',
					{headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`,
					  }
					}
				);
				setReportsComent(response.data.data);
			} catch(e) {
				setError(e)
			}
		};
		fetchReports();
		fetchReportsComent();
		
	}, []);
	console.log(reportsComent)

	if (error) return <div>에러가 발생했습니다. {error}</div>
	if (!reports) return <div>데이터가 없습니다.</div>
	else if (!reportsComent) return <div>데이터가 없습니다.</div>

	return <>
		<Header></Header>
		<ReportBoards boards={reports} comments={reportsComent} />
	</>
}

export default AdminReport;