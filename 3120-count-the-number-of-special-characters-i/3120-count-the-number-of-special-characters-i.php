class Solution {
    /**
     * @param String $word
     * @return Integer
     */
    function numberOfSpecialChars($word) {
        $lower = [];
        $upper = [];
        $count = 0;
        
        // Populate sets of present characters
        for ($i = 0; $i < strlen($word); $i++) {
            $char = $word[$i];
            if (ctype_lower($char)) {
                $lower[$char] = true;
            } else {
                $upper[$char] = true;
            }
        }
        
        // Check for special characters (both cases present)
        for ($i = 97; $i <= 122; $i++) { // ASCII for 'a' to 'z'
            $lowChar = chr($i);
            $upChar = chr($i - 32); // Convert to uppercase
            
            if (isset($lower[$lowChar]) && isset($upper[$upChar])) {
                $count++;
            }
        }
        
        return $count;
    }
}
