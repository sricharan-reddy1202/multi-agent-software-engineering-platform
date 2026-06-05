import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";
import DashboardCard from "../components/DashboardCard";

import { getStats } from "../services/dashboardService";

function DashboardPage() {

  const [stats, setStats] = useState({
    totalProjects: 0,
    totalRequirements: 0,
    completedRuns: 0,
  });

  useEffect(() => {

    const fetchStats = async () => {

      try {

        const response =
          await getStats();

        setStats(response.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchStats();

  }, []);

  return (
    <MainLayout>

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <DashboardCard
          title="Total Projects"
          value={stats.totalProjects}
        />

        <DashboardCard
          title="Requirements"
          value={stats.totalRequirements}
        />

        <DashboardCard
          title="Workflow Runs"
          value={stats.completedRuns}
        />

      </div>

    </MainLayout>
  );
}

export default DashboardPage;