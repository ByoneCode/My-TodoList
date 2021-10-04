import { Random } from "mockjs";
Random.cname()
export default [
  {
    url: "/api/getTaskList",
    method: "get",
    response: () => {
        return {
            code: 1,
            message: "ok",
            'data|1-10': [
              {
                'id|+1': 1,
                'name': '@cname',
                'isok|0-1': 0,
                'is_star|0-1': 0,
              }
            ],
        };
    },
  }
]