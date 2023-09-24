var output = function(nums, target) {
    let map = new Map()
    for(i in nums){
      if(map.has(target - nums[i])){
          return [map.get(target - nums[i]), i]
      }
      map.set(nums[i], i)

    }
};