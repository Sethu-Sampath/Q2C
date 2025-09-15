export function createSupabaseClient() {
  return {
    auth: {
      getUser: async () => ({ data: { user: null }, error: null }),
    },
    from: (table: string) => ({
      select: (columns: string) => ({
        eq: (column: string, value: any) => ({
          single: async () => {
            console.log("[v0] Mock server database query:", table, columns, column, value)
            return { data: null, error: null }
          },
        }),
      }),
      upsert: async (data: any) => {
        console.log("[v0] Mock server database upsert:", table, data)
        return { error: null }
      },
    }),
  }
}
